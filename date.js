const getDay = () => {
     return (new Date().toLocaleDateString("en-US", {weekday: "long"}));
};

export default getDay();
