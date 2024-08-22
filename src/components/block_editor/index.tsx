"use client";

import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

type Props = {
  value: Block[];
  onBlockChange: (content: Block[]) => void;
};
const BlockEditor = ({ value, onBlockChange }: Props) => {
  const editor = useCreateBlockNote({ initialContent: value });

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        onBlockChange(editor.document);
      }}
    />
  );
};

export default BlockEditor;
