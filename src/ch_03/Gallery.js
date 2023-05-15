import { useEffect, useState } from "react";
import axios from 'axios';

// 갤러리 만들기

const Gallery = () => {
    const [data, setData] = useState([]);
    const [src, setSrc] = useState("");

    useEffect(() => {
        axios.get('//api')
        .then(response => {
            setData(response.data.result.list);
        });
    }, []);
    
    const images = data[0];
    const regex = /<img[^>]*src\s*=\s*[\"']?([^>\"']+)[\"']?[^>]*>/;

    for (const value in images) {
        // console.log("value -->", images[value]);
        if (regex.test(images[value])) {
            //const imgsrc = images[value];
            const imgsrc = images[value].match(regex);
            console.log(imgsrc[1]);
        }
    }

    return (
        <div style={{ margin: '100px' }}>
            <h1> img json </h1>
            <img src = 
                {images}
            />
       </div>
    );
};

export default Gallery;