import { forHorizontalIOS, forRevealFromBottomAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Touchable,
} from 'react-native'

var allQuestions = [
    {
        "Question": "Term limit of a California Assembly member",
        "Answer": "2 Years",
        "Opt1": "4 Years",
        "Opt2": "6 Years",
        "Opt3": "12 Years"
    },
    {
        "Question": "Term limit of a California Senate member",
        "Answer": "4 Years",
        "Opt1": "2 Years",
        "Opt2": "6 Years",
        "Opt3": "12 Years"
    },
    {
        "Question": "What is the highest court of California?",
        "Answer": "Supreme Court of California",
        "Opt1": "Appellate Court",
        "Opt2": "Trial Court",
        "Opt3": "Judge Judy Court"
    },
    {
        "Question": "Who is the leader of California's executive branch? ",
        "Answer": "The Governor of California",
        "Opt1": "President of the United States (POTUS)",
        "Opt2": "Speaker of the House",
        "Opt3": "President pro Tempore"
    },
    {
        "Question": "Who is the current governor of California? ",
        "Answer": "Gavin Newsom",
        "Opt1": "Joe Biden",
        "Opt2": "Nancy Pelosi",
        "Opt3": "Kamala Harris"
    },
    {
        "Question": "How many members are in the California State Senate? ",
        "Answer": "40",
        "Opt1": "20",
        "Opt2": "2",
        "Opt3": "80"
    }
];

// bool function
function checkAnswer(userAns, actualAns) {
    if (userAns === actualAns) return true;
    else return false;
}

export const DisplayQuestion = () => {
    const [currentNum, changeNum] = useState(0); // initialize as 1
    const [correct, incrCorrect] = useState(0);
    const [incorrect, incrIncorrect] = useState(0);
    const [selectedAnswer, changeSelectedAnswer] = useState(''); // initialize as empty string
    let allOptions = [allQuestions[currentNum].Answer, allQuestions[currentNum].Opt1, allQuestions[currentNum].Opt2, allQuestions[currentNum].Opt3];
    allOptions = shuffle(allOptions);
    const [isQuizFinished, changeQuizState] = useState(false);
    function nextQues(userAnswer, correctAnswer) {
        if(isQuizFinished === true) return;
        if(currentNum + 1 === allQuestions.length) {
            checkAnswer(userAnswer, correctAnswer) ? incrCorrect(correct => correct + 1) : incrIncorrect(incorrect => incorrect + 1);
            changeQuizState(isQuizFinished => isQuizFinished = true);
            return;
        }
        checkAnswer(userAnswer, correctAnswer) ? incrCorrect(correct => correct + 1) : incrIncorrect(incorrect => incorrect + 1);
        changeNum(currentNum => currentNum + 1);
        allOptions = [allQuestions[currentNum].Answer, allQuestions[currentNum].Opt1, allQuestions[currentNum].Opt2, allQuestions[currentNum].Opt3];
        allOptions = shuffle(allOptions);
    }
    function restart() {
        changeQuizState(isQuizFinished => isQuizFinished = false);
        incrCorrect(correct => correct = 0);
        incrIncorrect(incorrect => incorrect = 0);
        changeNum(currentNum => currentNum = 0);
    }
    return (
        <View style={[qStyle.Container, { justifyContent: 'center', alignItems: 'center' }]}>
            <View style={[qStyle.Container, { backgroundColor: '#212121', width: '100%', height: 63, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                <View style={[qStyle.Container, { flexDirection: 'row', alignItems: 'center', borderRadius: 20, flex: 1, backgroundColor: '#F44336', marginLeft: 10 }]}>
                    <Image source={require('./Assets/x.png')} />
                    <Text style={[qStyle.qText, { fontSize: 28 }]}>
                        {incorrect}
                    </Text>
                </View>
                <View style={[qStyle.Container]} />
                <View style={[qStyle.Container, { backgroundColor: '#F7F7F7', justifyContent: 'center', alignItems: 'center', flex: 1, borderRadius: 20, height: '80%' }]}>
                    <Text style={[qStyle.qText, { fontSize: 30 }]}>
                        {currentNum + 1} / {allQuestions.length}
                    </Text>
                </View>
                <View style={[qStyle.Container]} />
                <View style={[qStyle.Container, { flexDirection: 'row', alignItems: 'center', borderRadius: 20, flex: 1, backgroundColor: '#43A047', marginRight: 10 }]}>
                    <Image source={require('./Assets/checkmark.png')} />
                    <Text style={[qStyle.qText, { fontSize: 28 }]}>
                        {correct}
                    </Text>
                </View>
            </View>
            <View style={[qStyle.Container, { marginTop: 15, borderBottomColor: '#FDD835', borderLeftColor: '#FAFAFA', borderRightColor: '#FAFAFA', borderTopColor: '#FAFAFA', borderWidth: 3 }]}>
                <Text style={[qStyle.qText, { textAlign: 'center', flex: 1, color: '#1C2833' }]}>
                    {allQuestions[currentNum].Question}
                </Text>
            </View>

            <View style={[qStyle.Container]}>
                <TouchableOpacity style={[qStyle.qBtn]} onPress={() => { nextQues(allOptions[0], allQuestions[currentNum].Answer) }}>
                    <Text style={[qStyle.qBtnText]}>{allOptions[0]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[qStyle.qBtn]} onPress={() => { nextQues(allOptions[1], allQuestions[currentNum].Answer) }}>
                    <Text style={[qStyle.qBtnText]}>{allOptions[1]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[qStyle.qBtn]} onPress={() => { nextQues(allOptions[2], allQuestions[currentNum].Answer) }}>
                    <Text style={[qStyle.qBtnText]}>{allOptions[2]}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[qStyle.qBtn]} onPress={() => { nextQues(allOptions[3], allQuestions[currentNum].Answer) }}>
                    <Text style={[qStyle.qBtnText]}>{allOptions[3]}</Text>
                </TouchableOpacity>
            </View>
            <View style={[qStyle.Container, {marginTop:60}]}>
                <TouchableOpacity style={[qStyle.optionBtn, {width:200, backgroundColor:'#FDD835'}]}>
                    <Text style={[qStyle.qText, {textAlign:'center'}]} onPress={() => {restart()}}>Restart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function randomNumberInclusive(max) {
    Math.floor(max); // floor number in case
    return Math.floor(Math.random() * (max + 1)); // generate inclusive max number
}

function randomNumberExclusive(max) {
    Math.floor(max);
    return Math.floor(Math.random() * max);
}
// 1 2 3 4
// 
function shuffle(array) {
	for (let i = 0; i < array.length; i++) {
		let j = randomNumberExclusive(array.length);
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
    return shuffledArray;
}

const qStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    qBtn: {
        marginTop: 20,
        width: 350,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282828'
    },
    optionBtn: {
        width: 175,
        height: 35,
        justifyContent: 'center',
    },
    qText: {
        fontWeight: '600',
        fontSize: 30,
    },
    qBtnText: {
        fontWeight: '600',
        fontSize: 30,
        color: '#FAFAFA',
        textAlign:'center',
    }
});
