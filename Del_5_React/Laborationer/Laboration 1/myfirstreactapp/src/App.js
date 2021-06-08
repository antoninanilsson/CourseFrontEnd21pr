import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import BookTable from './components/BookTable';

function App() {
 const [bookList] = useState([
   {
     id:1,
     ISBN: "9789127823303",
     title:"Hantera, utvärdera och förändra : Med lågaffektivt bemötande och tydliggöra",
     author: ["Bo Hejlskov Elvén","Anna Sjölund"],
     pages:327,
     year:2018,
     img:"https://s1.adlibris.com/images/43753653/hantera-utvardera-och-forandra-med-lagaffektivt-bemotande-och-tydliggora.jpg",
     cathegory:"Pedagogik",
     desc:"Äntligen kombineras verktyg från lågaffektivt bemötande och tydliggörande pedagogik till en pedagogisk helhet. Verktygen är uppdelade i tre olika verktygslådor: hantera, utvärdera och förändra. Som personal eller förälder behöver man behärska alla tre: I perioder av stress och kaos behöver man kunna hantera. Man behöver sedan kunna utvärdera orsaker till stress och kaos, men också ta reda på vilket stöd personen behöver. Sedan behöver vi kunna förändra, vilket ibland innebär träning, ibland förändring av den fysiska miljön och viktigast av allt: att förändra den pedagogiska ramen så att den anpassas efter personen"
   },
   {
    id:2,
    ISBN: "9789144112008",
    title:"Explosiva barn : ett nytt sätt att förstå och behandla barn som har svårt att tåla motgångar och förändringar",
    author: ["Ross W. Greene"],
    pages:208,
    year:2016,
    img:"https://s2.adlibris.com/images/28604518/explosiva-barn-ett-nytt-satt-att-forsta-och-behandla-barn-som-har-svart-att-tala-motgangar-och-forandringar.jpg",
    cathegory:"Barn- & utvecklingspsykologi",
    desc:"Barn som har svårt att leva upp till omgivningens förväntningar reagerar ofta med utmanande beteenden. Det kan handla om att skrika, slåss eller svära, men också om att dra sig undan, gråta eller tjura. Dessa beteenden kan få föräldrar och andra vuxna i barnets omgivning att känna sig maktlösa, frustrerade och i stort behov av hjälp.I denna kraftigt omarbetade och uppdaterade upplaga av Explosiva barn förklarar Ross W. Greene varför barn beter sig så här och visar hur föräldrar och skolpersonal kan bemöta barn med utmanande beteende på ett positivt sätt, utan bestraffningar och fiendskap.I boken beskrivs hur du kan:förstå de faktorer som bidrar till utmanande episoderidentifiera de specifika situationer där de utmanande episoderna vanligtvis uppstårminska eller eliminera de utmanande episoderna genom att lösa de problem som orsakar demlösa problem genom samarbete (snarare än ensidigt) och proaktivt (snarare än reaktivt)hjälpa barnet att utveckla färdigheter för att kunna agera mer flexibelt i olika situationer, lösa problem och hantera frustration på ett mer adekvat sättminska motsättningarna mellan dig och barnet.Boken vänder sig till alla som i sin vardag kommer i kontakt med barn med utmanande beteende"
   } ,
   {
    id:3,
    ISBN: "9789144071398",
    title:"En riktig människa",
    author: ["Gunilla Gerland"],
    pages:256,
    year:2010,
    img:"https://s2.adlibris.com/images/421240/en-riktig-manniska.jpg",
    cathegory:"Psykologi",
    desc:"Att vara så övergiven, så oskyddad, så utsatt som detta barn som här beskrivs, ter sig för de flesta människor helt obegripligt. Varför såg ingen, varför förstod ingen – hur kunde detta fortgå?Denna bok är en upprättelse – både för den kvinna som skrivit boken – och för andra som kämpar med känslan att ”inte vara som andra” och mot människors oförmåga att förstå.Professor Christopher Gillberg, som är Gunilla Gerlands läkare påpekar i sitt förord att boken handlar om ”den hårfina gränsdragningen mellan friskt och sjukt, normalt och onormalt, icke diagnos – diagnos och om dolda handikapp”. Han säger också att ”Gunilla Gerlands eget språk öppnar många fler dörrar till förståelse än någon psykiaters fackjargong."
   } ,    
   {
    id:4,
    ISBN: "9789177412038",
    title:"Autism inifrån : Speglingar av ett autistiskt vi",
    author: ["Serena Hasselblad","Dennis Hansson"],
    pages:100,
    year:2019,
    img:"https://s2.adlibris.com/images/54928020/autism-inifran-speglingar-av-ett-autistiskt-vi.jpg",
    cathegory:"Samhälle & Politik",
    desc:"Att vara annorlunda – så beskriver många autister vad autism innebär för dem. Samtidigt känns uppräkningen av bristande förmågor som finns i diagnosmanualer främmande. De beskriver en icke-autistisk majoritets utifrånperspektiv på autism. Våra egna berättelser handlar mer om hur vi upplever omvärlden och vad som fascinerar och intresserar oss. Problemen i vårt möte med den icke-autistiska världen beror inte nödvändigtvis på en nedsatt social förmåga – utan kanske mer på att det är stor skillnad mellan våra inre världar."
   } 

 ]);
 const [reader,setReader] = useState({
   id:1,
   name:"Antonina",
   loggedIn:false
 });

 const [storeName] = useState("Pedagogisk litteratur")

 const [bookLike, setbookLike] = useState([])

//  lägga till och ta bort boken från Like listan

 const addBookLike=(id)=> {  
   
   if (!isBookLiked(id)) {
       setbookLike(old =>{return [...old,id] })    
       
   }  
 }

 const deleteBookLike= (id)=> {
   setbookLike(old=>old.filter(book=>book!==id))

 }

 const isBookLiked=(id)=>{return bookLike.find(book=>book===id)
 }

  // Funktion toggle property loggedIn hos objekt Reader

//  const login=()=> {
//     setReader(prevReader=> ({...prevReader, loggedIn:!prevReader.loggedIn}));
//   }
  const login=()=> {
    setReader(prevReader=> {
      return  {...prevReader, loggedIn:!prevReader.loggedIn}
    })
  }
  
  return (
    <div >
      <Navbar title={storeName} login={login} reader={reader}/>
      <BookTable books={bookList} addBookLike={addBookLike} deleteBookLike={deleteBookLike} isBookLiked={isBookLiked}/>
    </div>
  );
}

export default App;
