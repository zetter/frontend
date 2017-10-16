module.exports = {
    description: 'Validate commits',
    task: [
        require('./javascript'),
        require('./check-for-disallowed-strings'),
    ],
    concurrent: true,
};
