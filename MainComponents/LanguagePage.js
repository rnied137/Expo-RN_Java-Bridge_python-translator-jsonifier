import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container} from 'native-base';
import Json from '../Components/Result';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const doubleRightIcon = <SimpleLineIcons name="arrow-right" size={50} color="white" />;
const doubleLeftIcon = <SimpleLineIcons name="arrow-left" size={50} color="white" />;
const playIcon = <SimpleLineIcons name="volume-2" size={50} color="white" />;

const doubleRightIconLower = <SimpleLineIcons name="arrow-right" size={50} color="white" />;
const doubleLeftIconLower = <SimpleLineIcons name="arrow-left" size={50} color="white" />;
const playIconLower = <SimpleLineIcons name="volume-2" size={50} color="white" />;

const LanguagePage = () => {
    let startNumber = Math.floor(Math.random() * Json.length);
    const [ number, setNumber ] = useState(startNumber);
	const [ polish, setPolish ] = useState(Json[startNumber].polish);
	const [ english, setEnglish ] = useState(Json[startNumber].english);
	const [ french, setFrench ] = useState(Json[startNumber].french);
	const [ german, setGerman ] = useState(Json[startNumber].german);


	SetRandomState = () => {
		let rand = Math.floor(Math.random() * Json.length);
		setPolish(Json[rand].polish);
		setGerman(Json[rand].german);
		setFrench(Json[rand].french);
		setEnglish(Json[rand].english);
		setNumber(rand);
	};

	return (
		<Container style={styles.main}>
			<Container press={SetRandomState} style={styles.upper}>
				<Container style={styles.stickyNote}>
					<Container style={styles.fifth}>
						<Text> #{number}</Text>
						<Text style={styles.decoratedText}>{english}</Text>
					</Container>
				</Container>

				<Container style={styles.lower}>
					<Container style={styles.stickyNote}>
						<Container style={styles.fifth}>
							<Text> #{number}</Text>
							<Text style={styles.decoratedText}>{german}</Text>
						</Container>
					</Container>
				</Container>

				<Container style={styles.Icons}>
					<TouchableOpacity onPress={SetRandomState} style={styles.circleButton}>
						{doubleLeftIconLower}
					</TouchableOpacity>

					<TouchableOpacity style={styles.middleButton}>{playIconLower}</TouchableOpacity>

					<TouchableOpacity onPress={SetRandomState} style={styles.circleButton}>
						{doubleRightIconLower}
					</TouchableOpacity>
				</Container>
			</Container>
		</Container>
	);
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: 'blue'
	},
	upper: {
		backgroundColor: '#01FF70'
	},
	lower: {
		backgroundColor: '#01FF70'
	},
	Icons: {
        marginTop:"10%",
		flex: 0.4,
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#3D9970',
		alignItems: 'center'
	},
	fifth: {
		flex: 5,
		backgroundColor: 'rgb(255, 255, 136)',
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	decoratedText: {
		fontSize: 30,
		color: 'black',
		textTransform: 'uppercase'
	},
	stickyNote: {
		backgroundColor: 'rgba(243,245,228,0.5)',
		borderStyle: 'solid',
		borderWidth: 15,
		borderColor: 'rgba(255,255,255,0.5)',
		borderWidth: 14
	},
	circleButton: {
		borderRadius: 30,
		padding: '10%',
		backgroundColor: 'rgba(144, 252, 3,0.9)',
		borderWidth: 3,
		borderTopWidth: 3
	},
	middleButton: {
		padding: '10%',
		borderTopWidth: 3,
		borderBottomEndRadius: 25,
		borderRadius: 30,
		borderLeftWidth: 3,
		borderRightWidth: 3,
		backgroundColor: 'rgba(144, 252, 3,0.9)'
	}
});


export default LanguagePage;
