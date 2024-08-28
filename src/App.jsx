import React, { useState } from 'react';
import Filters from './components/Filters';
import UserTable from './components/UserTable';

// Example users data
const users = [{
  "id": 1,
  "first_name": "Bobbette",
  "last_name": "Rabl",
  "email": "brabl0@wsj.com",
  "gender": "Female",
  "nationality": "Mayotte"
}, {
  "id": 2,
  "first_name": "Jo",
  "last_name": "Folley",
  "email": "jfolley1@washingtonpost.com",
  "gender": "Female",
  "nationality": "Cuba"
}, {
  "id": 3,
  "first_name": "Lenore",
  "last_name": "Stuke",
  "email": "lstuke2@hud.gov",
  "gender": "Female",
  "nationality": "Ukraine"
}, {
  "id": 4,
  "first_name": "Halie",
  "last_name": "Laux",
  "email": "hlaux3@ox.ac.uk",
  "gender": "Female",
  "nationality": "Russia"
}, {
  "id": 5,
  "first_name": "Stefania",
  "last_name": "Connerly",
  "email": "sconnerly4@linkedin.com",
  "gender": "Female",
  "nationality": "Ukraine"
}, {
  "id": 6,
  "first_name": "Flossi",
  "last_name": "Draijer",
  "email": "fdraijer5@photobucket.com",
  "gender": "Female",
  "nationality": "China"
}, {
  "id": 7,
  "first_name": "Rock",
  "last_name": "Gerran",
  "email": "rgerran6@bbb.org",
  "gender": "Genderqueer",
  "nationality": "Brazil"
}, {
  "id": 8,
  "first_name": "Arte",
  "last_name": "Snell",
  "email": "asnell7@behance.net",
  "gender": "Male",
  "nationality": "Indonesia"
}, {
  "id": 9,
  "first_name": "Kristopher",
  "last_name": "Lynch",
  "email": "klynch8@hatena.ne.jp",
  "gender": "Male",
  "nationality": "Indonesia"
}, {
  "id": 10,
  "first_name": "Rhett",
  "last_name": "Wondraschek",
  "email": "rwondraschek9@dailymail.co.uk",
  "gender": "Male",
  "nationality": "Philippines"
}, {
  "id": 11,
  "first_name": "Sybille",
  "last_name": "Heaton",
  "email": "sheatona@bing.com",
  "gender": "Female",
  "nationality": "Indonesia"
}, {
  "id": 12,
  "first_name": "Charlie",
  "last_name": "Pidcock",
  "email": "cpidcockb@uol.com.br",
  "gender": "Male",
  "nationality": "Argentina"
}, {
  "id": 13,
  "first_name": "Morgan",
  "last_name": "Gerardet",
  "email": "mgerardetc@npr.org",
  "gender": "Male",
  "nationality": "Philippines"
}, {
  "id": 14,
  "first_name": "Flossie",
  "last_name": "McCrone",
  "email": "fmccroned@jigsy.com",
  "gender": "Female",
  "nationality": "Jamaica"
}, {
  "id": 15,
  "first_name": "Michail",
  "last_name": "Drew-Clifton",
  "email": "mdrewcliftone@yahoo.com",
  "gender": "Male",
  "nationality": "China"
}, {
  "id": 16,
  "first_name": "Lewie",
  "last_name": "McGurk",
  "email": "lmcgurkf@ameblo.jp",
  "gender": "Male",
  "nationality": "Czech Republic"
}, {
  "id": 17,
  "first_name": "Hillery",
  "last_name": "Bedder",
  "email": "hbedderg@nifty.com",
  "gender": "Male",
  "nationality": "Philippines"
}, {
  "id": 18,
  "first_name": "Hester",
  "last_name": "De Vere",
  "email": "hdevereh@reverbnation.com",
  "gender": "Female",
  "nationality": "Peru"
}, {
  "id": 19,
  "first_name": "Gilberte",
  "last_name": "Abramovici",
  "email": "gabramovicii@devhub.com",
  "gender": "Female",
  "nationality": "China"
}, {
  "id": 20,
  "first_name": "Virginie",
  "last_name": "Mateev",
  "email": "vmateevj@seattletimes.com",
  "gender": "Female",
  "nationality": "China"
}, {
  "id": 21,
  "first_name": "Cosmo",
  "last_name": "Abramow",
  "email": "cabramowk@woothemes.com",
  "gender": "Polygender",
  "nationality": "Indonesia"
}, {
  "id": 22,
  "first_name": "Mahalia",
  "last_name": "Steffan",
  "email": "msteffanl@dailymail.co.uk",
  "gender": "Female",
  "nationality": "Argentina"
}, {
  "id": 23,
  "first_name": "Vannie",
  "last_name": "Brockton",
  "email": "vbrocktonm@behance.net",
  "gender": "Female",
  "nationality": "United States"
}, {
  "id": 24,
  "first_name": "Gray",
  "last_name": "Dobeson",
  "email": "gdobesonn@webs.com",
  "gender": "Female",
  "nationality": "Philippines"
}, {
  "id": 25,
  "first_name": "Terra",
  "last_name": "Stafford",
  "email": "tstaffordo@1und1.de",
  "gender": "Female",
  "nationality": "China"
}, {
  "id": 26,
  "first_name": "Averill",
  "last_name": "Silverthorne",
  "email": "asilverthornep@washingtonpost.com",
  "gender": "Male",
  "nationality": "China"
}, {
  "id": 27,
  "first_name": "Shurlocke",
  "last_name": "Caldron",
  "email": "scaldronq@prlog.org",
  "gender": "Male",
  "nationality": "China"
}, {
  "id": 28,
  "first_name": "Jaimie",
  "last_name": "Daout",
  "email": "jdaoutr@i2i.jp",
  "gender": "Male",
  "nationality": "Thailand"
}, {
  "id": 29,
  "first_name": "Pepito",
  "last_name": "Cheney",
  "email": "pcheneys@themeforest.net",
  "gender": "Male",
  "nationality": "China"
}, {
  "id": 30,
  "first_name": "Franklin",
  "last_name": "Palomba",
  "email": "fpalombat@huffingtonpost.com",
  "gender": "Male",
  "nationality": "China"
}, {
  "id": 31,
  "first_name": "Tildi",
  "last_name": "de Juares",
  "email": "tdejuaresu@instagram.com",
  "gender": "Female",
  "nationality": "Uzbekistan"
}, {
  "id": 32,
  "first_name": "Willem",
  "last_name": "Assel",
  "email": "wasselv@homestead.com",
  "gender": "Male",
  "nationality": "Russia"
}, {
  "id": 33,
  "first_name": "Spense",
  "last_name": "McCrum",
  "email": "smccrumw@spiegel.de",
  "gender": "Male",
  "nationality": "Sweden"
}, {
  "id": 34,
  "first_name": "Rosco",
  "last_name": "Butterfint",
  "email": "rbutterfintx@technorati.com",
  "gender": "Male",
  "nationality": "Comoros"
}, {
  "id": 35,
  "first_name": "Redd",
  "last_name": "Colliver",
  "email": "rcollivery@time.com",
  "gender": "Male",
  "nationality": "Bulgaria"
}, {
  "id": 36,
  "first_name": "Carole",
  "last_name": "Evelyn",
  "email": "cevelynz@yahoo.co.jp",
  "gender": "Female",
  "nationality": "Netherlands"
}, {
  "id": 37,
  "first_name": "Frasco",
  "last_name": "Cullinan",
  "email": "fcullinan10@reverbnation.com",
  "gender": "Male",
  "nationality": "Belarus"
}, {
  "id": 38,
  "first_name": "Germain",
  "last_name": "Ortet",
  "email": "gortet11@prlog.org",
  "gender": "Male",
  "nationality": "United States"
}, {
  "id": 39,
  "first_name": "Ricca",
  "last_name": "Tytcomb",
  "email": "rtytcomb12@icio.us",
  "gender": "Female",
  "nationality": "Brazil"
}, {
  "id": 40,
  "first_name": "Louisa",
  "last_name": "Pengelley",
  "email": "lpengelley13@guardian.co.uk",
  "gender": "Bigender",
  "nationality": "Poland"
}, {
  "id": 41,
  "first_name": "Yul",
  "last_name": "Onions",
  "email": "yonions14@dagondesign.com",
  "gender": "Male",
  "nationality": "China"
}, {
  "id": 42,
  "first_name": "Suellen",
  "last_name": "Minchenton",
  "email": "sminchenton15@cbc.ca",
  "gender": "Female",
  "nationality": "Indonesia"
}, {
  "id": 43,
  "first_name": "Agatha",
  "last_name": "Aldred",
  "email": "aaldred16@privacy.gov.au",
  "gender": "Female",
  "nationality": "Indonesia"
}, {
  "id": 44,
  "first_name": "Fancie",
  "last_name": "Kellard",
  "email": "fkellard17@nbcnews.com",
  "gender": "Female",
  "nationality": "Brazil"
}, {
  "id": 45,
  "first_name": "Giraldo",
  "last_name": "Earnshaw",
  "email": "gearnshaw18@weibo.com",
  "gender": "Male",
  "nationality": "France"
}, {
  "id": 46,
  "first_name": "Irwinn",
  "last_name": "Sidnell",
  "email": "isidnell19@wiley.com",
  "gender": "Male",
  "nationality": "Brazil"
}, {
  "id": 47,
  "first_name": "Janine",
  "last_name": "Arnould",
  "email": "jarnould1a@phoca.cz",
  "gender": "Female",
  "nationality": "Malta"
}, {
  "id": 48,
  "first_name": "Agustin",
  "last_name": "Diament",
  "email": "adiament1b@artisteer.com",
  "gender": "Male",
  "nationality": "Philippines"
}, {
  "id": 49,
  "first_name": "Mandi",
  "last_name": "Raft",
  "email": "mraft1c@comcast.net",
  "gender": "Female",
  "nationality": "Colombia"
}, {
  "id": 50,
  "first_name": "Ardis",
  "last_name": "Wheelband",
  "email": "awheelband1d@nifty.com",
  "gender": "Female",
  "nationality": "Finland"
}]
;

const App = () => {
  // State for the filtered users list
  const [filteredUsers, setFilteredUsers] = useState(users);
  
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      
      {/* Filters Component */}
      <Filters
        users={users}
        setFilteredUsers={setFilteredUsers}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      {/* User Table Component */}
      <UserTable filteredUsers={filteredUsers} />
    </div>
  );
};

export default App;
