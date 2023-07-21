import { type StateSchema } from '@/app/providers/StoreProvider';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { type SidebarItemType } from '../../model/types/sidebar';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-20-20.svg';
import { RoutePath } from '@/shared/const/router';

describe('getSidebarItems', () => {
    test('should return sidebar items', () => {
        const data: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте'
            },
            {
                path: `${RoutePath.profile}1`,
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true
            },
            {
                path: RoutePath.articles,
                Icon: ArticlesIcon,
                text: 'Статьи',
                authOnly: true
            }
        ];
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1'
                }
            }
        };
        expect(getSidebarItems(state as StateSchema)).toEqual(data);
    });
    test('should return sidebar items', () => {
        const data: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'Главная'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте'
            }
        ];
        const state: DeepPartial<StateSchema> = {
            user: {}
        };
        expect(getSidebarItems(state as StateSchema)).toEqual(data);
    });
});
