import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
} from 'react-native';

export const legislativeBranchInfo = () => {
    return (
        <View style={[eStyles.Container]}>
            <Text style={[eStyles.text]}>
                California's legislative branch is quite similar to Congress.
                It is a bicameral legislature (two houses) made up of members of the State Senate
                and the State Assembly.

                {'\n\n'}In total, there are 120 members in California's legislature who
                collaborate with each other to create, analyze, debate, and vote on what should be laws.

                {'\n\n'}<Text style={[eStyles.text, { fontWeight: 'bold' }]}>
                    Breakdown of California Assembly and Senate
                </Text>
            </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('./Assets/ca_legislature.png')}
                    style={{ flex: 1, height: 200, width: '100%', resizeMode: 'contain' }}
                />
                <Text style={[eStyles.text, { fontSize: 12, paddingTop: 0, textAlign: 'left', marginLeft: 0, marginRight: 0, }]} onPress={() => Linking.openURL('https://calbudgetcenter.org/resources/californias-supermajority-what-the-legislature-can-do/')}>
                    Image Source:
                    <Text style={[eStyles.text, { color: 'blue', fontSize: 12, textAlign: 'left', }]}>https://calbudgetcenter.org/resources/californias-supermajority-what-the-legislature-can-do/</Text>
                </Text>
            </View>
            <Text style={[eStyles.text]}>
                {'\n'}
                Term Limits:
                {'\n'}
                <Text style={[eStyles.text, { fontWeight: 'bold' }]}>
                    California Assembly Member:
                </Text> 2-year terms
                {'\n'}
                <Text style={[eStyles.text, { fontWeight: 'bold' }]}>
                    California Senate Member:
                </Text>
                {' '}4-year terms
                {'\n\n'}

                Why term limits? An advantage of term limits is it allows citizens to be actively
                engaged in politics by frequent elections. If your local representative or
                senator takes a position that doesn't align with your beliefs or values, you will
                have the opportunity to vote and elect another individual once their term limit ends.
                {'\n\n'}

                Under Califorina's 2012 Proposition 28, California legislators (both Senate and Assembly members) are limited to only serve up to 12 years.
                {'\n\n'}
                <Text style={[eStyles.text, { textAlign: 'left' }]}>
                    To find California legislative bills, you can look them up on:
                    <Text style={[eStyles.textLink, { fontSize: 16 }]} onPress={() => Linking.openURL('https://leginfo.legislature.ca.gov')}>
                        {' '}California Legislative Information Website{'\n\n\n\n\n'}
                    </Text>

                </Text>
            </Text>
        </View>
    );
}

export const executiveBranchInfo = () => {
    return (
        <View style={[eStyles.Container]}>
            <Text style={[eStyles.text]}>
                California's Executive Branch is lead by the State Governor and shares some similarities to how
                the federal government's approach to the executive branch such as the two 4-year term limits.
                {'\n\n'}
                The current Governor of California is Gavin Newsom
                {'\n\n'}

                <Text style={[eStyles.text, { fontWeight: 'bold' }]}>
                    Qualifications to run for Governor of California:
                </Text>
                {'\n'}
                - Must be a U.S. Citizen
                {'\n'}
                - Registered to vote in California
                {'\n'}
                - No prior felony convictions
                {'\n\n'}
                <Text style={[eStyles.text, { fontWeight: 'bold' }]}>
                    What does the Governor do?
                </Text>
                {'\n'}
                Just like the President of the United States, the Governor have 'formal powers' such as signing a piece
                of legislation into a law or veto a bill. However, it is worth mentioning that a Governor veto can be
                overriden if a majority of state legislators vote supporting the vetoed bill.
                {'\n\n'}
                It is also the Governor's responsibility to assign people to State Offices such
                as State Attourney General, State Treasurer, etc.{'\n'}
            </Text>
            <View style={{ backgroundColor: '#EF5350', width: '100%', height: 5, marginTop: 5, marginBottom: 5, marginTop: 0, marginBottom: 10 }} />
            <View style={[eStyles.Container, { lexDirection: 'column' }]}>
                <Image
                    //source={require('./Assets/arnold_gov.jpg')}
                    source={require('./Assets/newsom.jpeg')}
                    style={{ flex: 1, height: 175, width: '100%', resizeMode: 'contain' }}
                />
            </View>
            <Text style={[eStyles.text, { fontSize: 20, textAlign: 'center', fontWeight: 'bold' }]}>
                Governor of California{'\n\n\n'}
            </Text>
        </View>
    );
}

export const judicialBranchInfo = () => {
    return (
        <View style={[eStyles.Container]}>
            <Text style={[eStyles.text]}>
                The Judicial Branch is responsible for interpreting the law, assessing whether a law is constitutional
                and does not oppress people, and to serve punishments to those who break the law.{'\n'}
                {'\n'}
                California's judicial branch consists of three trial courts: Trial Courts, Appellate Courts, and the California
                Supreme Court{'\n\n'}
                <Text style={[eStyles.text, { fontWeight: 'bold' }]}>
                    Trial Court:
                </Text>
                {' '}Also known to as the Superior Court. This court handles civil, criminal, small claims,
                and misdemeanor cases.
                {'\n\n'}
                <Text style={[eStyles.text, { fontWeight: 'bold' }]}>
                    Appellate Court:
                </Text>
                {' '}Also known as the appeals court. This court handles appeals of earlier
                case judgements, evaluating the trial court's case procedures to determine if a decision
                was made correctly and in accordance with the law.
                {'\n\n'}
                <Text style={[eStyles.text, { fontWeight: 'bold' }]}>
                    Supreme Court of California:
                </Text>
                {' '}
                The highest court in the state and can review high level cases that affect a portion of the population.
                {'\n'}Similar to the U.S. Supreme Court, justices are appointed by the head of the executive
                branch. However, they have a 12 year term limit in contrast to the U.S. Supreme Court. Currently,
                there are five associate justices and one chief justice.

                {'\n\n'}
                <Text style={[eStyles.text, { textAlign: 'left' }]}>
                    Link to the California's Supreme Court Justices:{' '}
                    <Text style={[eStyles.text, { color: 'blue' }]} onPress={() => Linking.openURL('https://www.courts.ca.gov/3014.htm')}>
                        courts.ca.gov
                    </Text>
                </Text>
            </Text>
            <View style={[eStyles.Container, {justifyContent:'center',alignItems:'center',}]}>
                <Image source={require('./Assets/ca_judicial.png')} style={{ width: 180, height: 180 }} />
            </View>
        </View>
    );
}

const eStyles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    text: {
        marginLeft: 20,
        marginRight: 20,
        fontFamily: 'Times New Roman',
        fontSize: 16,
        textAlign: 'justify',
    },
    textLink: {
        color: 'blue',
    },
})