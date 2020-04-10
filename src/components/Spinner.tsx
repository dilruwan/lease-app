import React from 'react';
import FontAwesome from 'react-fontawesome';

type settings = {
    show: boolean
}
class Spinner extends React.Component<settings> {
    render() {
        if (this.props.show) {
            return (
                <div className="spinner-icon">
                    <FontAwesome
                        className="super-crazy-colors"
                        name="spinner"
                        size="3x"
                        spin
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </div>

            );
        }
        return '';
    }
}

export default Spinner;
