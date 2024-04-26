
export const HyphenLink = (string) => {
    if (string !== undefined) {
        const url = string.replace(/([~!@#$%^&*()_+=`{}[\]|\\:;'<>,./? ])+/g, '-').replace(/^(-)+|(-)+$/g, '');
        return url;
    }
}