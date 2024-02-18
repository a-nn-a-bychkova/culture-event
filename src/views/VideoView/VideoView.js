import s from './VideoView.module.css';
const videoYoutube = [
  {
    id: '1',
    trackName: 'The day I breathe Live at O Studio, June 2021',
    link: 'https://www.youtube.com/embed/aAEQfVt4olE',
  },
  {
    id: '2',
    trackName: 'The day I breathe Live at the basement April 2021',
    link: 'https://www.youtube.com/embed/t_eti_Xyr0w',
  },
  {
    id: '3',
    trackName: 'Hang me, oh hang me April 2021',
    link: 'https://www.youtube.com/embed/xsOoevWFVzk',
  },
  {
    id: '4',
    trackName: 'Aint no sunshine - Bill Withers Cover',
    link: 'https://www.youtube.com/embed/tuLDSZyYUjg',
  },
];
export default function VideoView() {
  return (
    <div>
      <ul className={s.List}>
        {videoYoutube.map(video => {
          return (
            <li className={s.Item} key={video.id}>
              <iframe
                width="560"
                height="315"
                src={video.link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={s.Video}
              ></iframe>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
