import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [result, setResult] = useState('');

    useEffect(() => {
        const req = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setResult(data.data.translations[0].translatedText);
        };

        if (text) {
            const timeoutId = setTimeout(() => {
                req();
            }, 500);
            return () => {
                clearTimeout(timeoutId);
            }
        } else {
            setResult('');
        }
        
    }, [language, text]);
    return (
        <div className="ui header">{result}</div>
    );
};

export default Convert;