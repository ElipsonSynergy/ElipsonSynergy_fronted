'use client' 

import  { useState } from 'react';
import InputError from '@/components/InputError'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
	ClassicEditor,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	BlockQuote,
	Bold,
	Base64UploadAdapter,
	CloudServices,
	Code,
	CodeBlock,
	CKBox,
	Essentials,
	FindAndReplace,
	Font,
	GeneralHtmlSupport,
	Heading,
	HorizontalLine,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Mention,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	RemoveFormat,
	ShowBlocks,
	SourceEditing,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextPartLanguage,
	TextTransformation,
	TodoList,
	Underline
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

const LICENSE_KEY = 'GPL';

const REDUCED_MATERIAL_COLORS = [];


const editorConfiguration = {
    plugins: [
        Alignment,
        Autoformat,
        AutoImage,
        AutoLink,
        BlockQuote,
        Bold,
        CloudServices,
        Code,
        CodeBlock,
        Essentials,
        FindAndReplace,
        Font,
        GeneralHtmlSupport,
        Heading,
        HorizontalLine,
        HtmlEmbed,
        Image,
        ImageCaption,
        ImageInsert,
        ImageResize,
        ImageStyle,
        ImageToolbar,
        ImageUpload,
        Base64UploadAdapter,
        Indent,
        IndentBlock,
        Italic,
        Link,
        LinkImage,
        List,
        ListProperties,
        MediaEmbed,
        Mention,
        PageBreak,
        Paragraph,
        PasteFromOffice,
        PictureEditing,
        RemoveFormat,
        ShowBlocks,
        SourceEditing,
        Strikethrough,
        Style,
        Subscript,
        Superscript,
        Table,
        TableCaption,
        TableCellProperties,
        TableColumnResize,
        TableProperties,
        TableToolbar,
        TextPartLanguage,
        TextTransformation,
        TodoList,
        Underline,
        
        
    ],
    licenseKey: LICENSE_KEY,
    language: 'en',
    toolbar: {
        shouldNotGroupWhenFull: true,
        items: [
            // --- Document-wide tools ----------------------------------------------------------------------
            'undo',
            'redo',
            '|',
            'sourceEditing',
            'showBlocks',
            '|',
            'findAndReplace',
            'selectAll',
            '|',

            // --- "Insertables" ----------------------------------------------------------------------------
            // 'insertTemplate',
            'link',
            'insertImage',
            'insertTable',
            'blockQuote',
            'mediaEmbed',
            'codeBlock',
            'htmlEmbed',
            'pageBreak',
            'horizontalLine',
            '-',

            // --- Block-level formatting -------------------------------------------------------------------
            'heading',
            'style',
            '|',

            // --- Basic styles, font and inline formatting -------------------------------------------------------
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'superscript',
            'subscript',
            {
                label: 'Basic styles',
                icon: 'text',
                items: [
                    'fontSize',
                    'fontFamily',
                    'fontColor',
                    'fontBackgroundColor',
                    'code',
                    '|',
                    'textPartLanguage',
                    '|'
                ]
            },
            'removeFormat',
            '|',

            // --- Text alignment ---------------------------------------------------------------------------
            'alignment',
            '|',

            // --- Lists and indentation --------------------------------------------------------------------
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'outdent',
            'indent'
        ]
    },
    
    fontFamily: {
        supportAllValues: true
    },
    fontSize: {
        options: [ 10, 12, 14, 'default', 18, 20, 22 ],
        supportAllValues: true
    },
    fontColor: {
        columns: 12,
        colors: REDUCED_MATERIAL_COLORS
    },
    fontBackgroundColor: {
        columns: 12,
        colors: REDUCED_MATERIAL_COLORS
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            {
                model: 'heading1',
                view: 'h1',
                title: 'Heading 1',
                class: 'ck-heading_heading1'
            },
            {
                model: 'heading2',
                view: 'h2',
                title: 'Heading 2',
                class: 'ck-heading_heading2'
            },
            {
                model: 'heading3',
                view: 'h3',
                title: 'Heading 3',
                class: 'ck-heading_heading3'
            },
            {
                model: 'heading4',
                view: 'h4',
                title: 'Heading 4',
                class: 'ck-heading_heading4'
            },
            {
                model: 'heading5',
                view: 'h5',
                title: 'Heading 5',
                class: 'ck-heading_heading5'
            },
            {
                model: 'heading6',
                view: 'h6',
                title: 'Heading 6',
                class: 'ck-heading_heading6'
            }
        ]
    },
    htmlEmbed: {
        showPreviews: true
    },
    htmlSupport: {
        allow: [
            // Enables all HTML features.
            {
                name: /.*/,
                attributes: true,
                classes: true,
                styles: true
            }
        ],
        disallow: [
            {
                attributes: [
                    { key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i }
                ]
            }
        ]
    },
    image: {
        resizeOptions: [
            {
                name: 'resizeImage:original',
                label: 'Default image width',
                value: null
            },
            {
                name: 'resizeImage:50',
                label: '50% page width',
                value: '50'
            },
            {
                name: 'resizeImage:75',
                label: '75% page width',
                value: '75'
            }
        ],
        toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            '|',
            'imageStyle:inline',
            'imageStyle:wrapText',
            'imageStyle:breakText',
            '|',
            'resizeImage'
        ],
        insert: {
            integrations: [ 'url' ]
        }
    },
    list: {
        properties: {
            styles: true,
            startIndex: true,
            reversed: true
        }
    },
    link: {
        decorators: {
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            }
        },
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://'
    },
    
    placeholder: 'Type or paste your content here!',
    style: {
        definitions: [
            {
                name: 'Title',
                element: 'h1',
                classes: [ 'document-title' ]
            },
            {
                name: 'Subtitle',
                element: 'h2',
                classes: [ 'document-subtitle' ]
            },
            {
                name: 'Callout',
                element: 'p',
                classes: [ 'callout' ]
            },
            {
                name: 'Side quote',
                element: 'blockquote',
                classes: [ 'side-quote' ]
            },
            {
                name: 'Needs clarification',
                element: 'span',
                classes: [ 'needs-clarification' ]
            },
            {
                name: 'Wide spacing',
                element: 'span',
                classes: [ 'wide-spacing' ]
            },
            {
                name: 'Small caps',
                element: 'span',
                classes: [ 'small-caps' ]
            },
            {
                name: 'Code (dark)',
                element: 'pre',
                classes: [ 'stylish-code', 'stylish-code-dark' ]
            },
            {
                name: 'Code (bright)',
                element: 'pre',
                classes: [ 'stylish-code', 'stylish-code-bright' ]
            }
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableProperties',
            'tableCellProperties',
            'toggleTableCaption'
        ]
    },
    
};

const CustomEditor = () => {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState([]);

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

    const submitForm = event => {
        event.preventDefault()
    };

    return (
        <div className="text-center pb-10 pt-10 lg:pb-20">

            

            <div className="flex justify-center">
                <div className="lg:w-8/12 ">
                    <form  onSubmit={submitForm} >
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Título"
                                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                                required
                            />
                            <InputError messages={errors.title} className="mt-2" />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Descripción"
                                className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                                required
                            />
                            <InputError messages={errors.title} className="mt-2" />
                        </div>
                        
                        
                        <div className="mb-10">
                            <input
                                type="submit"
                                value="Crear BLog"
                                className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                            />
                            <InputError messages={errors.register} className="mt-2" />
                        </div>

                    </form>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="lg:w-8/12 ">
                    <CKEditor
                        editor={ ClassicEditor }
                       
                        config={editorConfiguration}
                        onChange={ (event, editor ) => {
                            const data = editor.getData();
                            setContent(data);
                            console.log( { event, editor, data } );
                        } }
                    />
                </div>
            </div>
            <button onClick={handleSubmit} className="lg:w-8/12 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7 ">Enviar contenido</button>
        </div>

        
    );
};

export default CustomEditor;