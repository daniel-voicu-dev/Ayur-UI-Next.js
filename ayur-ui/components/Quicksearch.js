import {useState} from 'react'
import axios from 'axios'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Quicksearch = () => {
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const CancelToken = axios.CancelToken;
  let cancel;
  
  const getResults = async (v) => {    
    if (cancel !== undefined) {
      cancel();
    }  
    setLoading(true);
    let {data} = await axios({method:'get',url: "https://jsonplaceholder.typicode.com/posts",cancelToken: new CancelToken(c => cancel = c),})
    let results = data.slice(0, data.length < 10 ? data.length : 10)
    if(results.length > 0) {
      setResults(results);
      setLoading(false)
    }
    
  }
  
  return (
    <>
      <div className="quicksearch">
        <div className={`quicksearch__input bg-light ${focused ? "focused" : ""}`}>
          <button type="button" className={`btn-icon ${!focused || (focused && !results.length) ? "": "hidden"}`} aria-label="placeholder button"><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z'/></svg></span></button>
          <button type="button" className={`btn-icon ${focused && results.length ? "": "hidden"}`} aria-label="placeholder button" onClick={_=>setFocused(false)}><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg></span></button>
          <input type="text" placeholder="Search for an item" onKeyUp={e=>getResults(e.currentTarget.value)} onFocus={_=>setFocused(true)} />
          <button type="button" className={`btn-icon ml-2 ${focused && results.length ? "": "hidden"}`} aria-label="placeholder button" onClick={_=>setFocused(false)}><span className="ico"><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M268 112l144 144-144 144M392 256H100'/></svg></span></button>
          <div className={`quicksearch__results ${results.length && focused ? "" : "hidden"}`}>
            {results.map((o,i)=>(<div key={i} className="quicksearch__item py-1 px-2 flex-wrap align-items-center"><span className="text-ellipsis">{capitalize(o.title)}</span></div>))}
          </div>
        </div>      
        <div className={`quicksearch__backdrop ${!focused?"hidden":""}`} onClick={_=>setFocused(false)}></div>
      </div>        
    </>  
  )
}

export default Quicksearch