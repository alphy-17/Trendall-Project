import React from 'react';
import { Link } from 'react-router-dom';

let imageFiles = [
  'P-1-4.jpg',
  'P-11-1.jpg',
  'P-11-2.jpg',
  'P-11-3.jpg',
  'P-11-4.jpg',
  'P-11-5.jpg',
  'P-11-6.jpg',
  'P-12-2.jpg',
  'P-12-3.jpg',
  'P-12-4.jpg',
  'P-12-6.jpg',
  'P-13-1.jpg',
  'P-13-2.jpg',
  'P-13-3.jpg',
  'P-13-4.jpg',
  'P-14-2.jpg',
  'P-15-1.jpg',
  'P-15-2.jpg',
  'P-15-3.jpg',
  'P-15-4.jpg',
  'P-16-1.jpg',
  'P-16-2.jpg',
  'P-16-3.jpg',
  'P-16-4.jpg',
  'P-16-5.jpg',
  'P-16-6.jpg',
  'P-17-1.jpg',
  'P-17-2.jpg',
  'P-18-1.jpg',
  'P-18-2.jpg',
  'P-18-3.jpg',
  'P-19-1.jpg',
  'P-19-2.jpg',
  'P-2.jpg',
  'P-20-1.jpg',
  'P-20-2.jpg',
  'P-22A.jpg',
  'P-22B.jpg',
  'P-23-1.jpg',
  'P-23-2.jpg',
  'P-23-3.jpg',
  'P-23-4.jpg',
  'P-23-5.jpg',
  'P-24-1.jpg',
  'P-24-2.jpg',
  'P-24-3.jpg',
  'P-25-1.jpg',
  'P-25-2.jpg',
  'P-25-3.jpg',
  'P-26-1.jpg',
  'P-26-2.jpg',
  'P-27-1.jpg',
  'P-27-2.jpg',
  'P-27-3.jpg',
  'P-27-4.jpg',
  'P-28-1.jpg',
  'P-28-2.jpg',
  'P-28-3.jpg',
  'P-29-1.jpg',
  'P-29-2.jpg',
  'P-29-3.jpg',
  'P-29-4.jpg',
  'P-29-5.jpg',
  'P-3-1.jpg',
  'P-30-1.jpg',
  'P-30-2.jpg',
  'P-31-1.jpg',
  'P-31-2.jpg',
  'P-31-3.jpg',
  'P-31-4.jpg',
  'P-31-5.jpg',
  'P-32-1.jpg',
  'P-32-2.jpg',
  'P-32-4.jpg',
  'P-33-1.jpg',
  'P-33-2.jpg',
  'P-34-1.jpg',
  'P-34-2.jpg',
  'P-35-1.jpg',
  'P-35-2.jpg',
  'P-35-3.jpg',
  'P-36-1.jpg',
  'P-36-2.jpg',
  'P-36-3.jpg',
  'P-37-1.jpg',
  'P-38-1.jpg',
  'P-38-2.jpg',
  'P-39.jpg',
  'P-41-1.jpg',
  'P-41-2.jpg',
  'P-42-1.jpg',
  'P-42-2.jpg',
  'P-43-1.jpg',
  'P-43-2.jpg',
  'P-44-1.jpg',
  'P-44-2.jpg',
  'P-45-1.jpg',
  'P-45-2.jpg',
  'P-46-1.jpg',
  'P-46-2.jpg',
  'P-47.jpg',
  'P-50-1.jpg',
  'P-51-1.jpg',
  'P-51-2.jpg',
  'P-52-1.jpg',
  'P-52-2.jpg',
  'P-53-1.jpg',
  'P-53-2.jpg',
  'P-54-1.jpg',
  'P-54-2.jpg',
  'P-55-1.jpg',
  'P-56-1.jpg',
  'P-56-2.jpg',
  'P-57-1.jpg',
  'P-57-3.jpg',
  'P-58.jpg',
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[13]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[14]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[15]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[16]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[17]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[18]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[19]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[20]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[21]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[22]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[23]}`)} alt="" />
      </div>
      <div>
        <img className="h-auto max-w-full rounded-lg" src={require(`./artifactimg/${imageFiles[24]}`)} alt="" />
      </div>
      <Link
            to="/images"
        >
      <button
    type="button"
    style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        border: '1px solid transparent',
        fontSize: '0.875rem',
        fontWeight: 500,
        borderRadius: '0.375rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        color: '#fff',
        backgroundColor: '#666666',
        transition: 'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out',
        cursor: 'pointer',
        outline: 'none',
        textDecoration: 'none'
    }}
>
    View More
</button>

        </Link>
    </div>
  );
}

export default Gallery;
