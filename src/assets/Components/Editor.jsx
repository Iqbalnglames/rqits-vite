import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useState } from "react";

const Tiptap = () => {
  const [imageLinkForm, setImageLinkForm] = useState();
  const [imageLink, setImageLink] = useState(imageLinkForm);

  const handleUrlLink = (event) => {
    setImageLinkForm(event.prevent.default);
  };

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Tiptap Awal</p>",
  });
  const addImage = () => {
    setImageLink(imageLinkForm);
    if (imageLink != null) {
      editor
        .chain()
        .focus()
        .setImage({ src: imageLink }).run;
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="mt-24 mx-2 border border-black">
      {/* menu bar */}

      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        Bold
      </button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        Italic
      </button>
      <button onClick={() => editor.chain().focus().toggleStrike().run()}>
        Strike
      </button>
      <button onClick={() => editor.chain().focus().toggleCode().run()}>
        Code
      </button>
      {/* The button to open modal */}
      <label htmlFor="my-modal" className="">
        Add Image
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload Gambar Kamu Disini</h3>
          <input type="text" onChange={() => handleUrlLink} />
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn" onClick={addImage}>
              Send
            </label>
          </div>
        </div>
      </div>
      {/* end menubar */}

      <EditorContent editor={editor} />
    </div>
  );
};
export default Tiptap;
