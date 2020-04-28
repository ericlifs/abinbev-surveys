This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In order to run this project, just download this repo and run:

```
yarn install
yarn start
```

Or

```
npm install
npm start
```

If you prefer npm. This will run the CRA server and start the application on [http://localhost:3000](http://localhost:3000).

## JSON File

This app needs an external JSON file with the following structure to work:

```
{
  "title": "Survey's title", // This field is optional
  "questions": [
    {
      "title": "Answer 1",
      "name": "answer1", // This is the name of the field used by the form in order to send the value to the backend
      "type": "SINGLE_OPTION", // Type of the question/answer
      "validators": ["NOT_EMPTY"], // Array of custom validators which will be applied
      "answers": ["A", "B", "C"], // Array of possible answers
    }
  ]
}
```

### Question types
#### TEXT
This is a single input text field. It does not require an array of answers.

#### SINGLE_OPTION
This is a set of radio inputs. An answers array is required. The user will be able to select just one possible answer.

#### MULTIPLE_OPTION
This is a set of checkbox inputs. An answers array is required. The user will be able to select multiple answers.

### Validators
#### NOT EMPTY
This validates that the value provided by the user is not an empty array nor a empty string.

#### EMAIL
This validates that the value provided by the user matches the correct email format.