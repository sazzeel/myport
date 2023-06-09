import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CommonArea } from "./common.entity";
import { User } from "./user.entity";
import { TokenStatus } from "../constants/enum";

@Entity()
class Token extends CommonArea {
    @ManyToOne(() => User, (user) => user.token, {nullable: true})
    @JoinColumn({name: "user_id"})
    user: User;
    
    @Column({
        type: "text",
      })
      token: string;
    
      @Column({
        type: "boolean",
        default: true,
      })
      status: boolean;
    
      @Column({
        type: "datetime",
      })
      expiresAt: Date;
    }
    export default Token;
