import React from 'react';
import './App.css';


let char = {
  "characters": {
    "data": {
      "name": "Trollefar",
      "title": "None (0 titles unlocked)",
      "sex": "male",
      "vocation": "Knight",
      "level": 202,
      "achievement_points": 379,
      "world": "Vunira",
      "residence": "Thais",
      "married_to": "Mighty troll",
      "guild": {
        "name": "Elysium",
        "rank": "Follower"
      },
      "last_login": [
        {
          "date": "2017-11-03 18:34:13.000000",
          "timezone_type": 2,
          "timezone": "CET"
        }
      ],
      "comment": "Don't let your ego get too close to your position, so that if your position gets shot down, your ego doesn't go with it. \n16:21 Halfing Outrider [74]: I mean You aka harry Potter and Fredde aka Young Virgin\nAdministrator, Bureaucrat and Main Contact of TibiaData API (www.tibiadata.com)",
      "account_status": "Free Account",
      "status": "offline"
    },
    "achievements": [
      {
        "stars": 2,
        "name": "Aristocrat"
      },
      {
        "stars": 2,
        "name": "Brutal Politeness"
      },
      {
        "stars": 2,
        "name": "Culinary Master"
      },
      {
        "stars": 2,
        "name": "Explorer"
      },
      {
        "stars": 2,
        "name": "Ruthless"
      }
    ],
    "deaths": [],
    "account_information": {
      "loyalty_title": "Keeper of Tibia",
      "created": {
        "date": "2004-08-12 11:28:46.000000",
        "timezone_type": 2,
        "timezone": "CEST"
      }
    },
    "other_characters": [
      {
        "name": "Trollefar",
        "world": "Vunira",
        "status": "offline"
      },
      {
        "name": "Trollemor",
        "world": "Vunira",
        "status": "offline"
      }
    ]
  },
  "information": {
    "api_version": 2,
    "execution_time": 0.0007,
    "last_updated": "2020-01-08 14:41:00",
    "timestamp": "2020-01-08 14:42:53"
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input></input><button>Submit</button>
        </div>

        <div>Character Information</div>
        <div>Name: {char.characters.data.name}</div>
        <div>Title: {char.characters.data.title}</div>
        <div>Sex: {char.characters.data.sex}</div>
        <div>Vocation: {char.characters.data.vocation}</div>
        <div>Level: {char.characters.data.level}</div>
        <div>Achievement Points: {char.characters.data.achievement_points}</div>
        <div>World: {char.characters.data.world}</div>
        <div>Residence: {char.characters.data.residence}</div>
        <div>Married to: {char.characters.data.married_to}</div>
        <div>Guild Membership: {char.characters.data.guild.rank} of the {char.characters.data.guild.name}</div>
        <div>Last Login: {char.characters.data.last_login.date}, {char.characters.data.last_login.timezone_type}{char.characters.data.last_login.timezone}</div>
        <div>Comment: {char.characters.data.comment}</div>
        <div>Account Status: {char.characters.data.account_status}</div>

        <div>Account Achievements</div>
        <div>
          {char.characters.achievements.map((value) => ["stars:", value.stars, " ", value.name, <br />])}
        </div>

        <div>Account Information</div>
        <div>Loyalty Title: {char.characters.account_information.loyalty_title}</div>
        <div>Created: {char.characters.account_information.created.date}{char.characters.account_information.created.timezone_type}{char.characters.account_information.created.timezone}</div>

        <div>Characters</div>
        <div>
          {char.characters.other_characters.map((value, index) => [index + 1, ". ", value.name, " ", value.world, " ", value.status, <br />])}
        </div>




      </header>
    </div>
  );
}

export default App;
