let arrNews = [
    {
        author: 's1',
        text: 'lorem lorem  lorem lorem '
    },
    {
        author: 's2',
        text: 'lorem lorem'
    },
    {
        author: 's3',
        text: 'lorem lorem lorem lorem lorem lorem '
    }
];

let News = React.createClass({
    render() {
        let data = this.props.data;
        let newsTemplate;
        if (data.length > 0) {
            newsTemplate = data.map((item, index) => {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                );
            });
        } else {
            newsTemplate = <p>No News</p>
        }

        return (
            <div className="news">
                {newsTemplate}
                <strong className={data.length > 0 ? '':'none'}>Count news: {data.length}</strong>
            </div>
        );
    }
});

let Article = React.createClass({
   render() {
        let author = this.props.data.author,
            text = this.props.data.text;

        return (
            <div className="article">
                <div className="author">{author}</div>
                <div className="text">{text}</div>
            </div>
        )
   }
});

let App = React.createClass({
    render() {
        return (
            <div className="app">
                <h1>News</h1>
                <News data={arrNews} />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);