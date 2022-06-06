import React from 'react';

function Modal(props) {
    return (
        <div>
            <h3>칸반보드 추가하기</h3>
            <form>
                <table>
                    <tr>
                        <td>board title: </td>
                        <td><input type="text"></input></td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Modal;