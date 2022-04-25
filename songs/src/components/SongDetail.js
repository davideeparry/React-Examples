import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
        console.log(props);
        return <div>
            <h3>Details for:</h3>
            <p>
            {props.selectedSong ? `Title: ${props.selectedSong.title} Duration: ${props.selectedSong.duration}` : ''}
            </p>
            </div>
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);