import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Moment from 'moment';

const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext);

    const formatDate = (date) => {
        Moment.locale('en');
        return Moment(date).format('DD.MM.YYYY HH:mm:ss')
    }

    return (

        <TransitionGroup component='ul' className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={700}
                >
                    <li className="list-group-item note">
                        <div>
                            <strong>{note.title}</strong>
                            <small>{formatDate(note.date)}</small>
                        </div>

                        <button onClick={() => {
                            onRemove(note.id);

                            alert.show('Заметка была удалена', 'danger');
                        }} type="button"
                                className="btn btn-outline-danger btn-sm">
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}


export default Notes;