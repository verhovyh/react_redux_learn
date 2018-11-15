import React from "react";
import PropTypes from "prop-types";
const Input = ({ label, text, type, id, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            className="form-control"
            id={id}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);
Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};
export default Input;<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" >
            <title>How to set up React, Webpack, and Babel</title>
</head>
<body>
<div class="container">
    <div class="row mt-5">
        <div class="col-md-4 offset-md-1">
            <p>Create a new article</p>
            <div id="create-article-form">
                <!-- form -->
            </div>
        </div>
    </div>
</div>
</body>
</html>