import React , {Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TouchableOpacity, StyleSheet, } from 'react-native';

export default class HeartButton extends Component {
    constructor(props) {
        super(props);
        this.state = { addedToFavorite: false};
        this.addToFavorite = this.addToFavorite.bind(this);
    }

    addToFavorite() {
        console.log('button clicked')
        this.setState({
            addedToFavorite: !this.state.addedToFavorite
        })
        console.log(this.state, 'this.setState ', this.addedToFavorite, 'addedToFavorite')
    }

    render() {
        const {addedToFavorite } = this.state;
        return(
            <TouchableOpacity
                onPress={this.addToFavorite}
                style={styles.favoriteButton}>
                <View style={styles.HeartButton}>
                    <Icon
                        name="heart"
                        size={18} 
                        color={'#ffffff'}
                        />
                </View>
                <div className='overlay d-flex align-items-center justify-content-center'>
						Add to Favourites
					</div>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    HeartButton: {
        padding: 20
    }
})