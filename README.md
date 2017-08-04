# meteor-autoform-quill
Quill editor for Meteor-Autoform.

## Features

* Quill editor v1.3.0 ([quilljs.com](http://quilljs.com))

## Usage

#### Install
```
meteor add berkbadem:meteor-autoform-quill
```
#### Simple Schema / Autoform
```
Blog.attachSchema(new SimpleSchema({
    content: {
        type: String,
        label: "Content",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'quilleditor'
            }
        }
    }
}));

{{> quickForm collection="Blog" type="insert"}}
```

## Todos

* Custom settings for editor
* Styling
