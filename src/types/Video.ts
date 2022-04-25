type Video = {
    id: string,
    title: string,
    owner: string,
    channel: string
};

export const getVideo = (json: any): Video => {
    const { id, title, channel } = json;
    
    const owner = json['owner.screenname'];

    const video: Video = {
        id,
        title,
        owner,
        channel
    };

    return video;
}

export default Video;