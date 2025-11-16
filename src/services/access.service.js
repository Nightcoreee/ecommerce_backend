const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const RoleShop = {
    SHOP: 'SHOP',
    WRITTER: 'WRITTER',
    EDIT: 'EDIT',
    ADMIN: 'ADMIN'
}
class AccessService {
    static signUp = async () => {
        try {
            //check email exist
            const hodelShop = await shopModel.findOne({ email }).lean()
            if (hodelShop) {
                return {
                    code: 'xxxx',
                    message: 'Email already exists',
                }
            }
            const passwordHash = await bcrypt.hash(password, 10);
            const newShop = await shopModel.create({
                name, email, password: passwordHash, roles: [RoleShop.SHOP]
            })

            if (newShop) {
                // create private key, public key
                const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096,
                    })
                console.log({ privateKey, publicKey})
            }
        } catch (error) {
            return {
                code: 'xxx',
                message: 'Error message',
                status: 'error'
            }            
        }
    }
}

module.exports = AccessService