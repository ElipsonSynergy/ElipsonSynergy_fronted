'use client' 
import {useState} from 'react';
// import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar } from '@ckeditor/ckeditor5-image';
// import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build";

const editorConfiguration = {
    // plugins: [ Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize, LinkImage ],
    plugins: [  ],
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'insertImage',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'
    ],
    image: {
        toolbar: [
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative',
            '|',
            'linkImage'
        ],
        insert: {
            
            type: 'auto'
        }
    },
};

export default function CustomEditor( props ) {

    const [content, setContent] = useState('');
 
    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content })
            });

            if (response.ok) {
                console.log("Blog enviado con éxito");
                // Manejar la respuesta según sea necesario
            } else {
                console.error("Error al enviar el blog");
            }
        } catch (error) {
            console.error("Error al realizar la solicitud", error);
        }
    };

    return (
        <div className="text-center pb-10 lg:pb-20 pt-[120px]">
            <div className="flex justify-center">
                <div className="lg:w-8/12 ">
                    <CKEditor
                        editor={ Editor }
                        config={ editorConfiguration }
                        data={ props.initialData }
                        onChange={ (event, editor ) => {
                            const data = editor.getData();
                            setContent(data);
                            console.log( { event, editor, data } );
                        } }
                        className="lg:w-8/12"  
                    />
                </div>

            </div>
            <button onClick={handleSubmit} className="mt-10 w-8/12 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7 ">Enviar Blog</button>
        </div>
            
    );
}















// import React, { useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const CustomEditor = () => {
//     const [content, setContent] = useState('');

//     const handleSubmit = async () => {
//         try {
//             const response = await fetch('/api/blog', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ content })
//             });

//             if (response.ok) {
//                 console.log("Blog enviado con éxito");
//                 // Manejar la respuesta según sea necesario
//             } else {
//                 console.error("Error al enviar el blog");
//             }
//         } catch (error) {
//             console.error("Error al realizar la solicitud", error);
//         }
//     };

//     return (
//         <div className="text-center pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
//             <div className="flex justify-center">
//                 <div className="lg:w-8/12 ">
//                     <CKEditor
//                         editor={ClassicEditor}
//                         data={content}
//                         onChange={(event, editor) => {
//                             const data = editor.getData();
//                             setContent(data);
//                         }}
//                         className="lg:w-8/12"    
//                     />
//                 </div>
                

//             </div>
//             <button onClick={handleSubmit} className="lg:w-8/12 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7 ">Enviar Blog</button>
//         </div>

        
//     );
// };

// export default CustomEditor;