import { Page } from '@shared/models/layout.model';

export const shopPages = {
	home: new Page('Home', 'index', '/index'),
	wishlist: new Page('Wishlist', 'wishlist', '/user/wishlist'),
	pointsshop: new Page('Poinst Shop', 'pointsshop', '/pointsshop'),
	news: new Page('News', 'news', '/news'),
	stats: new Page('Statistics', 'stats', '/stats'),
};

export const communityPages = {
	home: new Page('Home', 'home', '/community'),
	discussions: new Page('Discussions', 'discussions', '/community/discussions'),
	market: new Page('Market', 'market', '/community/market'),
	workshop: new Page('Workshop', 'workshop', '/community/workshop'),
	broadcasts: new Page('Broadcasts', 'broadcasts', '/community/broadcasts'),
};

export const devPages = {
	dev: new Page('DEV', 'dev', '/dev'),
};

export const shopPagesArray = Object.values(shopPages);
export const communityPagesArray = Object.values(communityPages);
export const devPagesArray = Object.values(devPages);
