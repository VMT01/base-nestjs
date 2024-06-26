import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '@modules/user/user.module';
import { Web3Module } from '@modules/web3/web3.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessStrategy, RefreshStrategy } from './jwt.strategy';

@Module({
    imports: [Web3Module, UserModule, JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService, AccessStrategy, RefreshStrategy],
    exports: [],
})
export class AuthModule {}
