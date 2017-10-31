var URLGenerator = function(formURL)
{

    var paramsToQueryString = function(params)
    {
        if (!params) {
            return '';
        }
        var queryStringParams = "";
        for (var key in params) {
            if (typeof params[key] !== 'string' && !params[key] instanceof String && params[key].length) {
                for (arrayKey in params[key]) {
                    if (queryStringParams != "") {
                        queryStringParams += "&";
                    }
                    queryStringParams += 'entry.'+arrayKey.toString()+'='+encodeURIComponent(params[key][arrayKey]);
                }
            } else {
                if (queryStringParams != "") {
                    queryStringParams += "&";
                }
                queryStringParams += 'entry.'+key.toString()+'='+encodeURIComponent(params[key]);
            }
        queryStringParams += key + "=" + encodeURIComponent(obj[key]);
        return '?' + queryStringParams;
    }

    var paramsToSubmissionQueryString = function(params)
    {
        params = params || {};
        paramQueryString = paramsToQueryString(params);
        if (paramQueryString.length) {
            return '?ifq&'+paramQueryString.substring(1)+'&submit=Submit';
        }
        return '?ifq&submit=Submit';
    }

    return {
    prefilledURL: function(params)
    {
        return formURL + '/viewform' + paramsToQueryString(params);
    },
    submissionURL:function(params)
    {
        return formURL + '/formResponse' + paramsToSubmissionQueryString(params);
    }

    }
}
