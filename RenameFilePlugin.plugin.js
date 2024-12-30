/**
 * @name RenameFilePlugin
 * @version 1.1.0
 * @author or1z
 * @authorId 1206411268429451325
 * @description Automatically renames all uploaded files (images, GIFs, videos, etc.) with a customizable naming convention.
 * @changelogDate 2024-12-30
 */

const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

class RenameFilePlugin {
  constructor() {
    this.defaultSettings = {
      method: "Random Characters",
      randomCharLength: 7,
      consistentFilename: "file",
    };

    this.settings = { ...this.defaultSettings };
  }

  /**
   * Splits a string from the right.
   * @param {string} text - The string to split.
   * @param {string} separator - The character to split on.
   * @param {number} maxSplit - Maximum number of splits from the right.
   * @returns {string[]} - The split string array.
   */
  rSplit(text, separator = ".", maxSplit = 1) {
    const split = text.split(separator);
    return maxSplit
      ? [split.slice(0, -maxSplit).join(separator), ...split.slice(-maxSplit)]
      : split;
  }

  /**
   * Generates a new filename based on the chosen renaming method.
   * @param {string} filename - The original filename.
   * @returns {string} - The renamed file.
   */
  getFilename(filename) {
    const fileType = this.rSplit(filename, ".", 1)[1];
    const method = this.settings.method;

    switch (method) {
      case "Consistent":
        return `${this.settings.consistentFilename}.${fileType}`;

      case "Random Characters": {
        const randCharLen = this.settings.randomCharLength || 7;
        const chars = Array.from({ length: randCharLen }, () =>
          characters.charAt(Math.floor(Math.random() * characters.length)),
        );
        return `file-or1z-${chars.join("")}.${fileType}`;
      }

      case "Timestamp":
        return `file-or1z-${Date.now()}.${fileType}`;

      default:
        return filename;
    }
  }

  /**
   * Initializes the plugin by patching the file upload method.
   */
  start() {
    const Webpack = BdApi.Webpack;
    const attachmentStore = Webpack.getModule(m => m.uploadFiles && m.uploadFiles.length > 0);

    if (!attachmentStore) {
      console.error("[RenameFilePlugin] Failed to find the uploadFiles module.");
      return;
    }

    BdApi.Patcher.before(
      "RenameFilePlugin",
      attachmentStore,
      "uploadFiles",
      (_, args) => {
        const files = args[0]?.uploads;
        if (files && Array.isArray(files)) {
          files.forEach(file => {
            file.filename = this.getFilename(file.filename);
          });
        }
        return args;
      },
    );

    console.log("[RenameFilePlugin] Started.");
  }

  /**
   * Stops the plugin and removes patches.
   */
  stop() {
    BdApi.Patcher.unpatchAll("RenameFilePlugin");
    console.log("[RenameFilePlugin] Stopped.");
  }
}

module.exports = RenameFilePlugin;
