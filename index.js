let set = (githubEnv, circleVal) => {
    if (typeof process.env[githubEnv] === 'undefined' && typeof circleVal !== 'undefined') {
        process.env[githubEnv] = circleVal;
    }
};

export default githubActionInCircleCIShim = function(actionName) {
    set('HOME', "/github/home");
    set('GITHUB_ACTION', actionName);
    set('GITHUB_ACTOR', process.env.CIRCLE_USERNAME);
    set('GITHUB_EVENT_NAME', "push");
    set('GITHUB_EVENT_PATH', "/github/workflow/event.json");
    set('GITHUB_REF', process.env.CIRCLE_BRANCH);
    set('GITHUB_REPOSITORY', process.env.CIRCLE_REPOSITORY_URL);
    set('GITHUB_SHA', process.env.CIRCLE_SHA1);
    set('GITHUB_TOKEN', process.env.GITHUB_TOKEN);
    set('GITHUB_WORKFLOW', actionName);
    set('GITHUB_WORKSPACE', "/github/workspace");
};