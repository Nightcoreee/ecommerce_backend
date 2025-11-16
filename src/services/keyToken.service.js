const keytokenModel = require('../models/keytoken.model');

class keyTokenService {
    static createKeyToken = async ({ userId, publicKey }) => {
        try {
            const publicKeyString = publicKey.toString();
            const tokens = await keytokenModel.create({
                user: userId,
                publicKey: publicKeyString,
            });
            return tokens ? publicKeyString : null;
        } catch (error) {
            
        }
    }
}

module.exports = keyTokenService;