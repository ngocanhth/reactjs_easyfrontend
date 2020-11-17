import React, { useState } from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null,
};
function PostFiltersForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setSearchTerm] = useState("");
    const typingTimeoutRef = useRef(null);
    function handleSearchTearmChange (e){
        const value = e.target.value;
        setSearchTerm(value);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout (()=>{

        },300)
        if(!onSubmit) return;
        const formValue = {
            searchTerm: value,
        }
        onSubmit(formValue);
    }
    return (
        <form>
            <input type="text"
            value = {searchTerm}
            onChange = {handleSearchTearmChange}
            />
        </form>
    );
}

export default PostFiltersForm;