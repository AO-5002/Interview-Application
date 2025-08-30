"use client";
import React from "react";
import { useState, useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { StreamWrapperItems } from "@/components/ElementWrappers";
import { Play, Upload, CodeXml } from "lucide-react";
import { LanguageRadio } from "./LanguageRadio";

function EditorOptions() {
  return (
    <div className="flex flex-row items-center gap-4 pt-8">
      <StreamWrapperItems>
        <Play />
        Run
      </StreamWrapperItems>
      <StreamWrapperItems>
        <Upload />
        Submit
      </StreamWrapperItems>
      <StreamWrapperItems>
        <LanguageRadio>
          <CodeXml />
        </LanguageRadio>
      </StreamWrapperItems>
    </div>
  );
}

function EditorUI() {
  const [value, setValue] = useState(undefined);
  const editorRef = useRef(undefined);

  const onMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <Editor
      defaultLanguage="java"
      theme="vs-dark"
      onMount={onMount}
      value={value}
    />
  );
}

export { EditorUI, EditorOptions };
