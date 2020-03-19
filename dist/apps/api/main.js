/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const app_controller_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(17);
const entities_1 = __webpack_require__(6);
const ormconfig = __webpack_require__(18);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig),
            typeorm_1.TypeOrmModule.forFeature([entities_1.CityEntity]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(5);
let AppController = class AppController {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    index() {
        return this.deviceService.ko();
    }
};
__decorate([
    common_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "index", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __webpack_require__(3);
const entities_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(8);
let AppService = class AppService {
    async ko() {
        return typeorm_1.getManager()
            .transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager.save(entities_1.CityEntity, { name: "asd", is_capital: false, coordinates: { x: 12, y: 2 } });
            console.log(await transactionalEntityManager.findOne(entities_1.CityEntity, { id: 4 }));
        })
            .catch(async (error) => {
            throw error;
        });
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const credit_card_entity_1 = __webpack_require__(7);
exports.CreditCardEntity = credit_card_entity_1.CreditCardEntity;
const user_entity_1 = __webpack_require__(10);
exports.UserEntity = user_entity_1.UserEntity;
const region_entity_1 = __webpack_require__(15);
exports.RegionEntity = region_entity_1.RegionEntity;
const city_entity_1 = __webpack_require__(16);
exports.CityEntity = city_entity_1.CityEntity;
const confirmation_email_entity_1 = __webpack_require__(14);
exports.ConfirmationEmailEntity = confirmation_email_entity_1.ConfirmationEmailEntity;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CreditCardEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(8);
const class_transformer_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(10);
let CreditCardEntity = CreditCardEntity_1 = class CreditCardEntity {
    constructor(partial) {
        Object.assign(this, class_transformer_1.plainToClass(CreditCardEntity_1, partial));
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CreditCardEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'char', length: 19 }),
    __metadata("design:type", String)
], CreditCardEntity.prototype, "card_number", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CreditCardEntity.prototype, "card_exp_date", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CreditCardEntity.prototype, "recurring_token", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp' }),
    __metadata("design:type", String)
], CreditCardEntity.prototype, "recurring_exp", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", String)
], CreditCardEntity.prototype, "created_at", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", String)
], CreditCardEntity.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CreditCardEntity.prototype, "user_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.credit_cards),
    typeorm_1.JoinColumn({
        name: 'user_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], CreditCardEntity.prototype, "user", void 0);
CreditCardEntity = CreditCardEntity_1 = __decorate([
    typeorm_1.Entity({ name: 'credit_card' }),
    __metadata("design:paramtypes", [Object])
], CreditCardEntity);
exports.CreditCardEntity = CreditCardEntity;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var UserEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(8);
const class_transformer_1 = __webpack_require__(9);
const normalizeEmail = __webpack_require__(11);
const constants_1 = __webpack_require__(12);
const credit_card_entity_1 = __webpack_require__(7);
const confirmation_email_entity_1 = __webpack_require__(14);
let UserEntity = UserEntity_1 = class UserEntity {
    constructor(partial) {
        Object.assign(this, class_transformer_1.plainToClass(UserEntity_1, partial));
        this.email_normalized = normalizeEmail(this.email_normalized || '');
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "email_normalized", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "is_email_confirmed", void 0);
__decorate([
    typeorm_1.Column({ default: constants_1.ROLE.PATIENT, type: 'enum', enum: constants_1.ROLE }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    typeorm_1.Column({ default: constants_1.STATUS.INACTIVE, type: 'enum', enum: constants_1.STATUS }),
    __metadata("design:type", String)
], UserEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column({ type: 'char', length: 13 }),
    __metadata("design:type", String)
], UserEntity.prototype, "mobile_phone", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "is_mobile_phone_confirmed", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", String)
], UserEntity.prototype, "created_at", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", String)
], UserEntity.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.OneToMany(type => credit_card_entity_1.CreditCardEntity, creditCard => creditCard.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "credit_cards", void 0);
__decorate([
    typeorm_1.OneToOne(type => confirmation_email_entity_1.ConfirmationEmailEntity, confirmationEmail => confirmationEmail.user),
    typeorm_1.JoinColumn(),
    __metadata("design:type", confirmation_email_entity_1.ConfirmationEmailEntity)
], UserEntity.prototype, "confirmation_email", void 0);
UserEntity = UserEntity_1 = __decorate([
    typeorm_1.Entity({ name: 'user' }),
    __metadata("design:paramtypes", [Object])
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("normalize-email");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(13));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ROLE;
(function (ROLE) {
    ROLE["PATIENT"] = "PATIENT";
    ROLE["CONTENT_MANAGER"] = "CONTENT_MANAGER";
    ROLE["MEDICAL_CENTER_DIRECTOR"] = "MEDICAL_CENTER_DIRECTOR";
    ROLE["MEDICAL_CENTER_OPERATOR"] = "MEDICAL_CENTER_OPERATOR";
    ROLE["INSURANCE_AGENT"] = "INSURANCE_AGENT";
})(ROLE = exports.ROLE || (exports.ROLE = {}));
var STATUS;
(function (STATUS) {
    STATUS["INACTIVE"] = "INACTIVE";
    STATUS["ACTIVE"] = "ACTIVE";
})(STATUS = exports.STATUS || (exports.STATUS = {}));


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ConfirmationEmailEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(8);
const class_transformer_1 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(10);
let ConfirmationEmailEntity = ConfirmationEmailEntity_1 = class ConfirmationEmailEntity {
    constructor(partial) {
        Object.assign(this, class_transformer_1.plainToClass(ConfirmationEmailEntity_1, partial));
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ConfirmationEmailEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ConfirmationEmailEntity.prototype, "hash", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], ConfirmationEmailEntity.prototype, "is_confirmed", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", String)
], ConfirmationEmailEntity.prototype, "created_at", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", String)
], ConfirmationEmailEntity.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ConfirmationEmailEntity.prototype, "user_id", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.UserEntity, user => user.confirmation_email),
    typeorm_1.JoinColumn({
        name: 'user_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], ConfirmationEmailEntity.prototype, "user", void 0);
ConfirmationEmailEntity = ConfirmationEmailEntity_1 = __decorate([
    typeorm_1.Entity({ name: 'confirmation_email' }),
    __metadata("design:paramtypes", [Object])
], ConfirmationEmailEntity);
exports.ConfirmationEmailEntity = ConfirmationEmailEntity;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RegionEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(8);
const class_transformer_1 = __webpack_require__(9);
const city_entity_1 = __webpack_require__(16);
let RegionEntity = RegionEntity_1 = class RegionEntity {
    constructor(partial) {
        Object.assign(this, class_transformer_1.plainToClass(RegionEntity_1, partial));
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RegionEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RegionEntity.prototype, "region", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", String)
], RegionEntity.prototype, "created_at", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", String)
], RegionEntity.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.OneToMany(type => city_entity_1.CityEntity, city => city.region),
    __metadata("design:type", Array)
], RegionEntity.prototype, "cities", void 0);
RegionEntity = RegionEntity_1 = __decorate([
    typeorm_1.Entity({ name: 'region' }),
    __metadata("design:paramtypes", [Object])
], RegionEntity);
exports.RegionEntity = RegionEntity;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CityEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = __webpack_require__(8);
const class_transformer_1 = __webpack_require__(9);
const region_entity_1 = __webpack_require__(15);
let CityEntity = CityEntity_1 = class CityEntity {
    constructor(partial) {
        Object.assign(this, class_transformer_1.plainToClass(CityEntity_1, partial));
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CityEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CityEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], CityEntity.prototype, "is_capital", void 0);
__decorate([
    typeorm_1.Column({
        type: 'point',
        nullable: true,
        transformer: {
            from: v => v,
            to: v => `${v.x},${v.y}`,
        },
    }),
    __metadata("design:type", Object)
], CityEntity.prototype, "coordinates", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], CityEntity.prototype, "region_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => region_entity_1.RegionEntity, region => region.cities),
    typeorm_1.JoinColumn({
        name: 'region_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", region_entity_1.RegionEntity)
], CityEntity.prototype, "region", void 0);
CityEntity = CityEntity_1 = __decorate([
    typeorm_1.Entity({ name: 'city' }),
    __metadata("design:paramtypes", [Object])
], CityEntity);
exports.CityEntity = CityEntity;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const config_1 = __webpack_require__(19);
const entities_1 = __webpack_require__(6);
const typeOrmConfig = {
    entities: [
        entities_1.RegionEntity,
        entities_1.CityEntity,
        entities_1.CreditCardEntity,
        entities_1.UserEntity,
        entities_1.ConfirmationEmailEntity
    ],
    type: 'postgres',
    host: config_1.POSTGRES.HOST,
    port: config_1.POSTGRES.PORT,
    username: config_1.POSTGRES.USERNAME,
    password: config_1.POSTGRES.PASSWORD,
    database: config_1.POSTGRES.DATABASE,
    migrationsRun: false,
    synchronize: true,
};
module.exports = typeOrmConfig;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ })
/******/ ]);