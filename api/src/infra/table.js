const dbConnection = require("./dbConfig");

const init = () => {
  const connection = dbConnection();

  connection.query(
    `CREATE TABLE IF NOT EXISTS FLASHCARDTOPIC(
      CODTOPIC BIGINT(50) NOT NULL PRIMARY KEY, 
      CARDTITLE VARCHAR(50), 
      CARDDESCRIPTION VARCHAR(50))`,
    (error) => {
      if (error) console.log(error);
      else console.log("Tabela flashtopic criada com sucesso!");
    }
  );

  connection.query(
    `CREATE TABLE IF NOT EXISTS FLASHCARD(
      CODCARD BIGINT(50) AUTO_INCREMENT NOT NULL PRIMARY KEY, 
      QUESTION VARCHAR(250), 
      DEFINITION VARCHAR(250), 
      FK_COD_FLASHCARDTOPIC BIGINT(250), 
      FOREIGN KEY(FK_COD_FLASHCARDTOPIC) REFERENCES FLASHCARDTOPIC(CODTOPIC))`,
    (error) => {
      if (error) console.log(error);
      else console.log("Tabela flashcriada com sucesso!");
    }
  );
};

module.exports = function () {
  return init();
};

// CREATE TABLE FLASHCARDTOPIC (CODTOPIC INT AUTO_INCREMENT NOT NULL PRIMARY KEY, CARDTITLE VARCHAR(50), CARDDESCRIPTION VARCHAR(50));
// CREATE TABLE FLASHCARD(CODCARD INT AUTO_INCREMENT NOT NULL PRIMARY KEY, QUESTION VARCHAR(250), DEFINITION VARCHAR(250), FK_COD_FLASHCARDTOPIC INT, FOREIGN KEY(FK_COD_FLASHCARDTOPIC) REFERENCES FLASHCARDTOPIC(CODTOPIC));

