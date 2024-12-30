# RenameFilePlugin for BetterDiscord

## Description

The `RenameFilePlugin` is a BetterDiscord plugin that automatically renames uploaded files (images, GIFs, videos, etc.) with a customizable naming convention. This plugin provides three methods to rename files:

- **Consistent Filename**: Always uses the same filename.
- **Random Characters**: Generates a random string for the filename.
- **Timestamp**: Uses the current timestamp for the filename.

This plugin allows users to anonymize their file uploads and keep the naming conventions consistent or random based on their preferences.

## Features

- Renames any uploaded file (images, GIFs, videos, etc.) before sending.
- Customizable filename formats:
  - **Consistent**: Uses a fixed name for all files.
  - **Random Characters**: Generates a random string of characters (you can define the length).
  - **Timestamp**: Uses the current Unix timestamp.
- Supports custom length for random character filenames.
- Compatible with BetterDiscord.

## Installation

1. **Download the Plugin**:
   - Download `RenameFilePlugin.plugin.js` and save it to your BetterDiscord `plugins` folder.

2. **Enable the Plugin**:
   - Open Discord and go to **User Settings** > **BetterDiscord** > **Plugins**.
   - Find `RenameFilePlugin` in the list and toggle it on.

3. **Configure the Plugin**:
   - The plugin supports configurable settings:
     - **Method**: Choose how the filenames will be renamed (`Random Characters`, `Consistent`, or `Timestamp`).
     - **Random Char Length**: Define the length of random characters for filenames.
     - **Consistent Filename**: Set a fixed name for all files when using the `Consistent` method.

## Settings

The plugin supports the following configuration options:

- **Method** (`Random Characters`, `Consistent`, or `Timestamp`): Determines the renaming method.
- **Random Char Length** (`7` by default): The length of the random characters for the `Random Characters` method.
- **Consistent Filename** (`file` by default): The base filename when using the `Consistent` method.

These settings can be modified through the plugin's settings menu in BetterDiscord.

## Usage

After installing and enabling the plugin, all files uploaded on Discord will be renamed according to the selected method:

- **Random Characters**: The plugin generates a random string with the specified length and renames the file.
  - Example: `file-or1z-7j9z@#8.mp4`
- **Consistent**: The file will always be renamed to the same name.
  - Example: `file.mp4`
- **Timestamp**: The file will be renamed with the current timestamp.
  - Example: `file-or1z-1637840223094.mp4`

You can easily change these settings through the plugin settings in BetterDiscord to suit your needs.

## Example of File Renaming

### Original Filename:
```
example-image.png
```

### Renamed Filenames (depending on the selected method):
- **Consistent**:
  ```
  file.png
  ```
- **Random Characters**:
  ```
  file-or1z-jkG7k@1.png
  ```
- **Timestamp**:
  ```
  file-or1z-1637840223094.png
  ```

## Developer Notes

- This plugin uses BetterDiscord's patching system to intercept file uploads and rename them before they are sent.
- The plugin is designed to work with all file types that Discord supports for uploads, including images, GIFs, and videos.

## Changelog

### v1.1.0
- Initial release of `RenameFilePlugin`.
- Supports file renaming with three methods: `Consistent`, `Random Characters`, and `Timestamp`.
- Added support for custom random character length.
  
### v1.0.0
- Basic version with file renaming functionality.

## License

This plugin is open-source and free to use. Please feel free to contribute, report issues, or suggest improvements.

## Credits

- **Developer**: or1z

---

If you have any questions or need help with the plugin, feel free to reach out to me
