const execa = require('execa');
const disallowedStrings = require('../../../disallowed-strings.js');
const getChangedFiles = require('../lib/get-changed-files');
const checkForDisallowedString = require('../lib/check-for-disallowed-strings');

module.exports = {
    description: 'Check for disallowed strings',
    task: () =>
        Promise.all(
            disallowedStrings.map(
                ({ regex, message, maxOccurrences, pathspecs }) =>
                    getChangedFiles().then(files => {
                        if (!files.length || !files.every(f => !!f)) return;

                        execa
                            .stdout('git', [
                                'grep',
                                '-Ein',
                                '--color',
                                regex.source,
                                ...files,
                            ])
                            .then(matches => checkForDisallowedString({
                                regex,
                                message,
                                maxOccurrences,
                                pathspecs,
                            }))
                            .catch(err => {
                                // git grep returns with error code 1 when there are no matches.
                                // For us, this is not actually an error state so we swallow the
                                // error by returning a fake resolved Promise.
                                if (
                                    err.code === 1 &&
                                    err.stdout === '' &&
                                    err.stderr === ''
                                ) {
                                    return;
                                }

                                // In all other cases, assume it's a real error
                                return Promise.reject(err);
                            })
                    })
            )
        ),
    concurrent: true,
};
