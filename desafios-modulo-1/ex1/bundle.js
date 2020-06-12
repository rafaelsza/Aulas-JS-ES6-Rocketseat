"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.users = [];
    this.user = {
      email: email,
      senha: senha,
      admin: false
    };
    this.addUser();
  }

  _createClass(Usuario, [{
    key: "addUser",
    value: function addUser() {
      this.users.push(this.user);
    }
  }, {
    key: "isAdmin",
    value: function isAdmin() {
      return this.user.admin;
    }
  }, {
    key: "viewUsers",
    value: function viewUsers() {
      return this.users;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.user.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('dada@gmail.com', 'senha25151');
var Admin1 = new Admin('admin@gmail.com', 'adsad');
console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
console.log(User1.viewUsers());
console.log(Admin1.viewUsers());
/* class Usuario {
    constructor(email, senha){
        this.users = [];
        this.user = { email, senha, admin: false };
        this.addUser(this.user);
    }

    addUser(user){
        this.users.push(user);
    }

    isAdmin(){
        return this.user.admin;
    }

    viewUsers(){
        return this.users;
    }
}

class Admin extends Usuario{
    constructor() {
        super();
        this.user.admin = true;
    }
}


const User1 = new Usuario('dada@gmail.com', 'senha1213');
const Admin1 = new Admin('admin@gmail.com', 'adsad');


console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
console.log(Admin1.viewUsers()); */
