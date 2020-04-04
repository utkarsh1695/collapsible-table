export default [
  { "question_id": 1234, "user_id": "abcd", "question": "Who is Jack Porter?", "answer": "Jack Porter is the CEO of Cognizer Inc.", "source": "BOX", "doc_id": "abcd1234", "like": true, "feedback": null },
  { "question_id": 1001, "user_id": "abcd", "question": "Who is Sue Porter?", "answer": "Sue Porter is the wife of Jack", "source": "BOX", "doc_id": "abcd1234", "like": false, "feedback": null },
  { "question_id": 1002, "user_id": "abcd", "question": "Who is Sue Porter?", "answer": "Sue Porter is the wife of Jack", "source": "BOX", "doc_id": "abcd1234", "like": false, "feedback": null },
  { "question_id": 1236, "user_id": "abcd", "question": "Who is Jack Porter?", "answer": "Jack Porter is the CEO of Cognizer Inc.", "source": "BOX", "doc_id": "abcd1234", "like": true, "feedback": null },
  { "question_id": 1012, "user_id": "abcd", "question": "Who is Sue Porter?", "answer": "Sue Porter is the wife of Jack", "source": "BOX", "doc_id": "abcd1234", "like": false, "feedback": null },
  { "question_id": 1235, "user_id": "abcd", "question": "Who is Jack Porter?", "answer": "Jack Porter is the CEO of Cognizer Inc.", "source": "BOX", "doc_id": "abcd1234", "like": true, "feedback": null }
];

const modifiedData = [
  {
    "question_id": 1234, "user_id": "abcd", "question": "Who is Jack Porter?", "answer": "Jack Porter is the CEO of Cognizer Inc.", "source": "BOX", "doc_id": "abcd1234", "like": true, "feedback": null, subDataRow: [
      { "question_id": 1235, "user_id": "abcd", "question": "Who is Jack Porter?", "answer": "Jack Porter is the CEO of Cognizer Inc.", "source": "BOX", "doc_id": "abcd1234", "like": true, "feedback": null },
      { "question_id": 1235, "user_id": "abcd", "question": "Who is Jack Porter?", "answer": "Jack Porter is the CEO of Cognizer Inc.", "source": "BOX", "doc_id": "abcd1234", "like": true, "feedback": null }
    ]
  },
  {
    "question_id": 1001, "user_id": "abcd", "question": "Who is Sue Porter?", "answer": "Sue Porter is the wife of Jack", "source": "BOX", "doc_id": "abcd1234", "like": false, "feedback": null, subDataRow: [
      { "question_id": 1002, "user_id": "abcd", "question": "Who is Sue Porter?", "answer": "Sue Porter is the wife of Jack", "source": "BOX", "doc_id": "abcd1234", "like": false, "feedback": null },
      { "question_id": 1012, "user_id": "abcd", "question": "Who is Sue Porter?", "answer": "Sue Porter is the wife of Jack", "source": "BOX", "doc_id": "abcd1234", "like": false, "feedback": null },
    ]
  },
]