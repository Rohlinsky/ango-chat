import {Module} from '@nestjs/common';
import {EventsModule} from './events/events.module';
import {UserService} from './user/user.service';
import {UserModule} from './user/user.module';

@Module({
    imports: [EventsModule],
    providers: [UserModule],
})
export class AppModule {
}
