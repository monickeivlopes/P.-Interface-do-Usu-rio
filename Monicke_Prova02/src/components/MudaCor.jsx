export default function MudaCor() {
    const [texto, setTexto] = useState('');
  
    function handleColor(){
              const cor = [ "#6BCB77"];
              const randomColor = cor[Math.floor(Math.random() * cor.length)];
              document.body.style.backgroundColor = randomColor;
  
      }
  
    useEffect(() => {
      handleColor()
    },[texto])
  


  }