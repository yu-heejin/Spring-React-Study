import React from 'react';

function Modal(props) {
    return (
        <div>
            <h3>Add your project</h3>
            <form>
                <table>
                    <tr>
                        <td>Project title </td>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td>Person </td>
                        <td><input type="text"></input></td>
                    </tr>
                    <tr>
                        <td>description </td>
                        <td><input type="text"></input></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Modal;