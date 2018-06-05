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

```javascript
Blog.attachSchema(new SimpleSchema({
    content: {
        type: String,
        label: "Content",
        optional: true,
        autoform: {
            afFieldInput: {
                type: 'quilleditor'
            },
          	placeholder: 'Edit me...', // optional
          	theme: 'bubble',           // optonal, default is 'snow'
          	modules: JSON.stringify({  // optional, stringify required, default is below
          	    toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                    ['clean']
                 ]
            }),
        }
    }
}));

{{> quickForm collection="Blog" type="insert"}}
```

## Todos

* Custom settings for editor
* Styling
