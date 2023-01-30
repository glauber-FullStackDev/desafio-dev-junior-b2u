import React, { FormEvent } from 'react'
import DriveFolderUploadSharpIcon from '@mui/icons-material/DriveFolderUploadSharp';

interface inputFileProps {
    label?: string
    name: string
    onChange: (e: FormEvent<HTMLInputElement>) => void
    imagePreview: string
  }


export default function InputFile({label, name, onChange, imagePreview }: inputFileProps) {
  return (
    <div >
        <label 
          className='rounded cursor-pointer text-white p6 w-full h-[56px] gap-8 bg-blue-500 flex justify-evenly items-center'
          htmlFor={name}
        >
          {label}
          <DriveFolderUploadSharpIcon 
            style={{ width: '3rem', height: '3rem', color: '#fff' }}
          /> 
        </label>
        <input
          className='hidden'          
          name={name}
          id={name}
          onChange={onChange}
          type='file'          
        />
        {
            imagePreview && (
                <span
                  className='relative flex justify-center p-1 h-[200px] w-full '
                >
                    <img
                      className='absolute object-scale-down h-full w-full'
                      src={imagePreview}
                      alt="preview da imagem que ser enviada" 
                    />
                </span>
            )
        }
    </div>
  )
}
