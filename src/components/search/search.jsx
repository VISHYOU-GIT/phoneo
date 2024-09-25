 
import { AutoComplete, Button, Input } from 'antd';
 
import './search.css'
export default function Search() {
    const options = ["vivo V16 5G",
        "Samsung Galaxy F23 5G",
        "OPPO Reno 8T 5G",
        "vivo Y56 5G",
        "OPPO A57 5G"].map(val => ({ value: val }));
     

    return (
        <div className='search'>

          
            <AutoComplete
                className='mx-2 autoComplete'
                size='large'
                options={options}



                filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }

            >
                <Input.Search size="large" placeholder=" Search for phones" />
            </AutoComplete>

 
        </div>
    )
}



