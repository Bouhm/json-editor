# JSON Editor

An online editor to make editing JSON more approachable with features to allow for failproof json editing. Switch between editor view and json view (WIP) to see the changes under the hood and ease into understanding json. 

![demo-gif](https://i.imgur.com/AZ7dN50.gif)

# Built with

- React hooks with TypeScript
- CSS-in-JS with fela.js

# Usage

Drag and drop or select the json file to load into the editor for modification. Alternatively, click on "Create new JSON" to start from scratch. You can view the contents of the editor and make changes to specific portions of the data. 

## Adding changes

To add changes, switch to "Edit View" on the bottom. This will reveal the inputs for adding new fields. Typing in the field name and the desired value from the dropdown box, then press <kbd>Enter</kbd> or click on the confirm button to add the field. You can switch back to "Normal View" if you are done editing.

## Tools

When you are done making changing, click on 'Export JSON' to save the changes as a `.json` file.
