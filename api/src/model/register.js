const register = require('../controllers/register.js');

const connection = require('../infra/dbConfig.js')();

module.exports = {
    getFlahCards: res => {
        connection.query(`
        SELECT CARDTITLE, CARDDESCRIPTION, QUESTION, DEFINITION 
        FROM FLASHCARDTOPIC 
        INNER JOIN FLASHCARD 
        ON CODTOPIC = FK_COD_FLASHCARDTOPIC`,
            (error, result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json(result);
                }
            });
    },

    getFlashTopic: (res) => {
        connection.query(`
        SELECT *FROM FLASHCARDTOPIC`,
            (error, result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json(result);
                }
            });
    },

    getFlashCurrent: (res, id) => {
        connection.query(`
        SELECT CARDTITLE, CARDDESCRIPTION, QUESTION, DEFINITION 
        FROM FLASHCARDTOPIC 
        INNER JOIN FLASHCARD 
        ON CODTOPIC = FK_COD_FLASHCARDTOPIC WHERE CODTOPIC = ${id}`,
            (error, result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json(result);
                }
            });
    },

    deleteFlashCard: (res, id) => {

        connection.query(
            `DELETE FROM FLASHCARD
            WHERE FK_COD_FLASHCARDTOPIC = ${id}`,
            (error, result) => {
                if (error) {
                    res.status(400).json(error);
                } else {
                    res.status(200).json(result);
                }
            })
    },

    addFlashTopic: (res, record) => {
        const { CODTOPIC, CARDTITLE, CARDDESCRIPTION } = record;
        const sql = `INSERT INTO FLASHCARDTOPIC VALUES(${CODTOPIC}, "${CARDTITLE}", "${CARDDESCRIPTION}")`
        console.log(sql)
        connection.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(record);
            }
        })
    },

    addFlashCard: (res, record) => {
        const { QUESTION, DEFINITION, FK_COD_FLASHCARDTOPIC } = record
        const sql = `INSERT INTO FLASHCARD VALUES(NULL, "${QUESTION}", "${DEFINITION}", ${FK_COD_FLASHCARDTOPIC})`

        connection.query(sql, (error, result) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(record);
            }
        })
    },

    updateFlashCard: (res, id, values) => {

        const sql = 'UPDATE CADASTRO SET ? WHERE id=?'

        connection.query(sql, [values, id], (error, result) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({ id, values });
            }
        })
    },
}

